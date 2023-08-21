import PropTypes from "prop-types"

function Item({ marca, ano_lancamento }) {

    return (

        <>
            <li>{marca} - {ano_lancamento}</li>
        </>

    )

}

Item.defaultProps = {
    marca: "Sem marca",
    ano_lancamento: 2018
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

export default Item;