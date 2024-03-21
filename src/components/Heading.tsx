interface HeadingProps {
    name: string;
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
    return (
           <h2 className="text-xl font-bold py-4">  {name}</h2>
    );
};

export default Heading;
