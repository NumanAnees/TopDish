import { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import axios from 'axios';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import InfiniteScroll from 'react-infinite-scroller';


const Links = ({ query, category, links, totalLinks, linksLimit, linkSkip }) => {
    const [allLinks, setAllLinks] = useState(links);
    const [limit, setLimit] = useState(linksLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalLinks);

  const handleCount = async linkId => {
        const response = await axios.put(`${API}/click-count`, { linkId });
        loadUpdatedLinks();
    };
    const loadUpdatedLinks = async () => {
        const response = await axios.post(`${API}/category/${query.slug}`);
        setAllLinks(response.data.links);
    };

    const listOfLinks = () =>{
       return allLinks.map((l, i) => (
            <div key={i} className="row alert alert-primary p-2">
                <div className="col-md-8" onClick={e => handleCount(l._id)}>
                    <a href={l.url} target="_blank">
                        <h5 className="pt-2">{l.title}</h5>
                        <h6 className="pt-2 text-danger" style={{ fontSize: '12px' }}>
                            {l.url}
                        </h6>
                    </a>
                </div>
                <div className="col-md-4 pt-2" >
                    <span className="pull-right">
                        {moment(l.createdAt).fromNow()} by {l.postedBy.name}
                    </span>
                    <br />
                    {/* <span className="badge text-secondary pull-right">{l.clicks} clicks</span> */}
                </div>
                <div className="col-md-12 mt-2" style={{"display":"flex","flexDirection":"row"}}>
                    <span className="badge text-dark">
                        {l.price}Rs / {l.gst}
                    </span>
                    <span className="badge text-success">{l.category.name}</span>
                     <span className="badge text-secondary pull-left ml-auto" style={{"marginRight":"10.7rem"}}>{l.clicks} clicks</span>

                </div>
            </div>
        ))}
    const loadMore = async () => {
        let newSkip = skip + limit ;
        const response = await axios.post(`${API}/category/${query.slug}`, { skip: newSkip, limit });
        console.log("----",response);
        if(response){    
        setAllLinks([...allLinks, ...response.data.links]);
        }
        setSize(response.data.links.length);
        setSkip(newSkip);
        return;
    };

    return (
        <Layout>
            <div className="row">
                <div className="col-md-8">
                    <h1 className="display-4 font-weight-bold">{category.name} - URL/Links</h1>
                    <div className="lead alert alert-secondary pt-4">{renderHTML(category.content || '')}</div>
                </div>
                <div className="col-md-4">
                    <img src={category.image.url} alt={category.name} style={{ width: 'auto', maxHeight: '200px' }} />
                </div>
            </div>
            <br />
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={size > 0 && size >= limit}
                loader={<img key={0} src="/static/images/loading.gif" alt="loading" />}
            >
                <div className="row">
                    <div className="col-md-8">{listOfLinks()}</div>
                    <div className="col-md-4">
                        <h2 className="lead">Most popular in {category.name}</h2>
                        <p>show popular links</p>
                    </div>
                </div>
            </InfiniteScroll>
        </Layout>
    );
};

Links.getInitialProps = async ({ query, req }) => {
    let skip = 0;
    let limit = 10;

    const response = await axios.post(`${API}/category/${query.slug}`, { skip, limit });
    return {
        query,
        category: response.data.category,
        links: response.data.links,
        totalLinks: response.data.links.length,
        linksLimit: limit,
        linkSkip: skip
    };
};

export default Links;
