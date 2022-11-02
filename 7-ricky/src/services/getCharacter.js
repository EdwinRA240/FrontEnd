import Swal from "sweetalert2";

const getCharacter = async (name) => {
    // setLoading(true);
    try {
        url = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive'
        const response = await fetch(url)
        if (!response.ok) {
            return Swal.fire({
                title: "Error!",
                text: `${name} no existing`,
                icon: "error"
            });
        }
        const data = await response.json();
        console.log([...data, results]);
        setCharacter([...data, results]);    
    } catch (error) {
        console.log(error.message);
        return Swal.fire({
            title: "Error!",
            text: `Server error: ${error.message}`,
            icon: "error"
        });
    } finally {
        setLoading(false);
    }
}