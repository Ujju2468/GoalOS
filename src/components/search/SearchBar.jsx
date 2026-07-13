import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import roadmapData from "../../data/roadmapData";

function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const results =
        roadmapData.filter(day =>
            day.subject.toLowerCase().includes(query.toLowerCase()) ||
            day.topic.toLowerCase().includes(query.toLowerCase()) ||
            String(day.day).includes(query)
        );
    return (
        <div className="searchBar-container">
            <Search size={18} />
            <input
                type="text"
                placeholder="Search day, subject, topic..."
                value={query}
                onChange={(e) =>
                    setQuery(e.target.value)
                }
            />
            {
                query.length > 0 && (
                    <div className="search-results">
                        {
                            results.map(item => (
                                <div
                                    key={item.day}
                                    className="search-item"
                                    onClick={() => {
                                        navigate(`/planner/${item.day}`);
                                        setQuery("");
                                    }}
                                >
                                    <strong>
                                        Day {item.day}
                                    </strong>
                                    <p>
                                        {item.subject}
                                    </p>
                                    <small>
                                        {item.topic}
                                    </small>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default SearchBar;