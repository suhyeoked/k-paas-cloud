import NavBar from "@/component/NavBar/NavBar";
import style from "./style.module.css";
import { useState } from "react";

const SearchPages = () => {
  const [statute, setStatute] = useState<string[]>(["법령 1", "법령 2"]);
  const [bill, setBill] = useState<string[]>(["법안 1", "법안 2"]);
  const [keyword, setKeyword] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const filteredStatute = statute.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );
  const filteredBill = bill.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className={style.inputSearch}>
        <input
          type="search"
          placeholder="검색어 입력"
          value={keyword}
          onChange={handleSearchChange}
        />
      </div>

      <div className={style.SearchMain}>
        <ul>
          <li>
            <h1>법령</h1>
          </li>
          <li>더보기</li>
        </ul>
        <div>
          <h2>관련 법령</h2>
          {filteredStatute.length > 0 ? (
            filteredStatute.map((item, index) => (
              <div key={index} className={style.SearchMainDetail}>
                {item}
              </div>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      </div>

      <div className={style.SearchMain}>
        <ul>
          <li>
            <h1>법안</h1>
          </li>
          <li>더보기</li>
        </ul>
        <div>
          <h2>관련 법안</h2>
          {filteredBill.length > 0 ? (
            filteredBill.map((item, index) => (
              <div key={index} className={style.SearchMainDetail}>
                {item}
              </div>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPages;
