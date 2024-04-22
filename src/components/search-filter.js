import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/search-filter.css";

export const SearchBar = ({ setResults }) => {
        const [input, setInput] = useState("");

        const fetchData = (value) => {
                fetch("https://api.github.com/users/Timo1304/repos")
                .then((response) => response.json())
                .then(json => {
                        const results = json.filter((repo) => {
                            return (
                            value && 
                            repo && 
                            repo.name && 
                            repo.name.toLowerCase().includes(value)
                            );
                        });
                        setResults(results);
                });
        };

        const handleChange =(value) => {
            setInput(value);
            fetchData(value);
        }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search repos...." 
            value={input} 
            onChange={(e) => handleChange(e.target.value) }/>
        </div>
    );
};