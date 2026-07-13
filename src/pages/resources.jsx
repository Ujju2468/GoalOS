
// import Layout from "../components/layout/Layout";
// import resourcesData from "../data/resourcesData";

// function Resources() {
//   return (
//     <Layout>
//       <div className="resources-page">

//         <h1>Resources</h1>

//         {resourcesData.map((section) => (

//           <div
//             key={section.category}
//             className="resource-card"
//           >

//             <h2>{section.category}</h2>

//             {section.resources.map((item) => (

//               <a
//                 key={item.title}
//                 href={item.url}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="resource-link"
//               >
//                 {item.title}
//               </a>

//             ))}

//           </div>

//         ))}

//       </div>
//     </Layout>
//   );
// }
// export default Resources;

import Layout from "../components/layout/Layout";
import resourcesData from "../data/resourcesData";
import {
  BookOpen,
  ExternalLink,
  Search
} from "lucide-react";
import { useState } from "react";
function Resources() {
  const [search, setSearch] = useState("");
  const filtered = resourcesData.filter(section =>
    section.category
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  return (
    <Layout>
      <div className="resources-page">
        <div className="resources-header">
          <h1>Learning Resources</h1>
          <div className="resource-search">
            <Search size={18} />
            <input
              placeholder="Search subject..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>
        {
          filtered.map(section => (
            <div
              key={section.category}
              className="resource-card"
            >
              <div className="resource-title">
                <BookOpen />
                <h2>
                  {section.category}
                </h2>
              </div>
              {
                section.resources.map(item => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="resource-link"
                  >
                    <div>
                      <span className="resource-tag">
                        {item.type}
                      </span>
                      <p>
                        {item.title}
                      </p>
                    </div>
                    <ExternalLink
                      size={18}
                    />
                  </a>
                ))
              }
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

export default Resources;