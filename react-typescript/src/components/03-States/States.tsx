import React, { useState } from 'react';

interface NavLinksType {
    id: number;
    link: string;
    text: string;
};

const navLinks = [
    {
        id: 1,
        link: "url",
        text: "text"
    },
    {
        id: 2,
        link: "url",
        text: "text"
    },
    {
        id: 3,
        link: "url",
        text: "text"
    }
];

const States = () => {
    const [name, setName] = useState("string");
    const [num, setNum] = useState(1);
    const [products, setProducts] = useState<string[]>([]);
    const [links, setLinks] = useState<NavLinksType[]>(navLinks);
  return (
    <div>
        <h3>count</h3>
        <button 
        onClick={() => {
            setLinks(prev => [...prev, {id: 4, link: "link", text: "text"}])
        }}>click</button>
    </div>
  )
}

export default States