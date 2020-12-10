import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Box } from "@material-ui/core";
import PaintingCard from './components/PaintingCard';

const data = [
    {
        id: "One",
        image: "pic1res.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis tellus nisi, ac vestibulum mi sodales nec. Nullam pulvinar, urna a malesuada hendrerit, velit metus sodales risus, id volutpat sem eros eget metus."
    },
    {
        id: "Two",
        image: "pic2res.jpg",
        desc: "Sed mattis, tellus eget viverra laoreet, urna nisi tempus dolor, ut gravida massa magna a ligula. Mauris non semper nibh, ac lacinia nunc. Nunc dictum enim tristique ligula molestie, in vestibulum ipsum tincidunt. Curabitur sit amet euismod orci, non viverra odio."
    },
    {
        id: "Three",
        image: "pic3res.jpg",
        desc: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam varius sem eu sodales porttitor. Ut sed rutrum erat. Donec at arcu cursus, convallis urna nec, venenatis ipsum. Etiam scelerisque, enim et ultrices faucibus, ante erat imperdiet risus, sed fringilla tellus nibh dignissim risus."
    },
    {
        id: "Four",
        image: "pic4res.jpg",
        desc: "Curabitur quis dolor lobortis velit sagittis laoreet sed in est. Duis vitae nunc sed eros sagittis tincidunt. Mauris ullamcorper efficitur diam eget ornare. Nulla a fermentum odio, vitae imperdiet lectus. Aliquam porta consectetur efficitur."
    },
    {
        id: "Five",
        image: "pic5res.jpg",
        desc: "Nulla semper diam risus, eget consequat tellus fermentum quis. Vivamus venenatis orci sit amet metus pretium lacinia. Nam interdum diam et enim tempor condimentum. Etiam interdum facilisis neque sit amet lobortis. Sed luctus magna eget ipsum semper, vel ultricies erat eleifend."
    }
];

const Layout2 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <Box display="flex" justifyContent="center" mt={2} >
                <h1><span>Acrylic Painting</span> Gallery</h1>
            </Box>
            {data.map(paint => (
                <PaintingCard datum={paint} />
            ))}
        </div>
    );
};

export default Layout2;
