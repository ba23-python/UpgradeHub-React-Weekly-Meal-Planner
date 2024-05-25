function FilterByCity({ cities, setCity }) {

    const handleChange = (ev) => {
        const value = ev.target.value;
        setCity(value)
    }
    return (
        <select name="" id="" onChange={handleChange}>
            <option value="all"> Seleccione</option>
            {cities.map((city, i) => <option key={i} value={city}> {city} </option>)}
        </select>
    )
}

export default FilterByCity;