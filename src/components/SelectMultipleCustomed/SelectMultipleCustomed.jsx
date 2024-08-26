import { CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";

const SelectMultipleCustomed = ({
    label = "Ingrese su texto aquí",
    valor = [], 
    setValor = () => {},
    loading = false,
    options = [],
    requerido = false,
    desactivado = false,
}) => {
    const isAllSelected = options.length > 0 && valor.length === options.length;

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.includes("todo")) {
            setValor(isAllSelected ? [] : options.map((item) => item.value));
            return;
        }
        setValor(value);
    };

    const handleClear = () => {
        setValor([]);
    };

    const handleDisabled = () => {
        return desactivado || loading;
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={`selectMultiple-label-${label.replace(/\s+/g, '-')}`}>
                {loading ? <CircularProgress size={24} sx={{ marginRight: 2 }} /> : label}
            </InputLabel>
            <Select
                labelId={`selectMultiple-label-${label.replace(/\s+/g, '-')}`}
                id={`selectMultiple-${label.replace(/\s+/g, '-')}`}
                value={valor}
                label={label}
                onChange={handleChange}
                multiple
                disabled={handleDisabled()}
            >
                <MenuItem value="todo">
                    <span>{isAllSelected ? "Deseleccionar todo" : "Seleccionar todo"}</span>
                </MenuItem>
                {options.map((item) => (
                    <MenuItem key={item.value} value={item.value}
                    sx={{
                        backgroundColor: valor.includes(item.value) ? "lightblue" : "white",
                        '&.Mui-selected': {
                            backgroundColor: "lightblue",
                            '&:hover': {
                                backgroundColor: "darkblue",
                                color: "white",
                            },
                        },
                    }}
                    
                    >
                        <span>{item.label}</span>
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText className={`${!requerido ? "hidden" : ''}`}>Requerido</FormHelperText>
        </FormControl>
    );
}

export default SelectMultipleCustomed;
