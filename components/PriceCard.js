const PriceCard = ({ prestation }) => {
    console.log(prestation);
    return (
        <div>
            <div>{prestation.fields.titre}</div>
            <div>{prestation.fields.prix}</div>
        </div>
    );
};

export default PriceCard;
