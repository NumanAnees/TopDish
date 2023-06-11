import React from "react";
import Notifications from "react-notifications-menu";
import imageNotification from "../public/static/images/notification.png";

const UserNotification = () => {
  const data = [
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAZlBMVEX///8AAADz8/OxsbGurq78/Pz5+fn29vZeXl7v7+/s7OyNjY26urp8fHyioqLl5eWXl5fGxsYyMjJZWVlDQ0PNzc1jY2OCgoLZ2dltbW1KSkp0dHQfHx8tLS0XFxcoKCg6OjoNDQ2iUJIcAAADNElEQVR4nO2b25aCMAxFLSCgVEqVuzrI///kCHiFAgpJ8SH7ZR661vQs2jQnaV2tCIIgCIIgCIIgWhhpJDk3OZcyEs7Sat6wt3x3CAt2pzznrieN9dK6GqIgZ0piXyytbSX8Qi2uIeSbRdUlf0PqaoXBYsssdmPiGnx7CXVOMPrt7hRSv7w0/FRdRab7wPG+UVfBdarbZt/KY8zTJ09cvpd3XWNdgZxOUXclNLTIi8qJ+thFR5RM/Xr1F8QXKGbIYyzH3oObr469LjtkfT1W5XN8VHnBXHmMRYjy5sTGnQJvC9qTzuU2eFsQYHUrUiR5Bow8liPp+9COjmOiyJt3Mr9yQtE3wVP1gWEGxcd2fpwYoSKx4OQxhlAYf+3oh0BIIoDbD2UDHiH1IRScQMmjASGFSEB5IUZXBsQcNAQI8gA/4B+GPMATBsuiwoTIHstfXf1zfJqtzkOtMQU3rRmYUk8PgSB+A9serGedJW9ppNfkPNdS+U2b78p6OLMWCVr50os5edvWqGPuXw69QPsVg9Pyg/t3SycO78O55qsu2a2WXi+KzG7isHTK46rUdXwMK52ExouuHqOQN3Fgx+rhI/ImFIFbR+q2Z37GLpVzinqNbOVchOW6AcpmlLV3OR93+775r+z8wS5NnJ2rPyeE+giu/VIB/wXV7jn3rKzsl3HwfXXdnEDLWys7414Vk2lvZ6YuwxVnDcJFw1qx60+3QsJRB8z9TFZd113AD5ukM0fxKCQMVXMh265uIpxDZxB8fbu9e/e1yO6qf22D253Ni1AjtRpsrYsW+X7qtNLxSr6vMUqyS93nBHHnA2yS8jFaJp0GxvaZc0pXrHBynbCOYcn2sa9cno2fVUd4kfnK9orDvUMYHhKzbcVAsR1nwDE7xsYYqG/XI26bIMYwZlH9B7wtKILnGTKRIsALX3PwLd2nnLFeYymNyBRw3jpBXJ7fQHm06I7P+ynw7uWaQAHvB/cIMQJ5/4Fhr8CiA0mfsmXwQ/rSEk7eH0aBfobTF2OkOMAFRskg6962y7ccxyebRLdMnESCZmCsma//KkLMl8Z2xM1Z8Oi3fhpCEARBEARBEIRG/gF3NCtfJf+HsgAAAABJRU5ErkJggg==",
      message: "Kameshwaran S had shared a feedback with you.",
    },
  ];
  return (
    <>
      <Notifications
        // style={{ position: "absolute", right: "10%" }}
        data={data}
      />
    </>
  );
};

export default UserNotification;