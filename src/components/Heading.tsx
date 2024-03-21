interface HeadingProps {
    name: string;
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
    return (
           <h2 className="text-3xl font-bold mt-10 mx-6 py-4">{name}</h2>
    );
};

export default Heading;
