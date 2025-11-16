import { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [data, steData] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef();
  const getData = async (page) => {
    try {
      const url = `https://picsum.photos/v2/list?page=${page}&limit=10 `;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const datas = await getData(page);
    steData((preData) => [...preData, ...datas]);
    setLoading(false);
    setPage((prePage) => prePage + 1);
  }, [page, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);

      if (entry.isIntersecting) {
        loadMore();
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);
  const firstPage = async () => {
    const datas = await getData(1);
    console.log(datas);
    steData(datas);
  };
  useEffect(() => {
    firstPage();
  }, []);

  return (
    <>
      <div className="images">
        {data &&
          data.map((curItem, index) => {
            return (
              <div key={index}>
                <img src={curItem.download_url} alt="Images" />
              </div>
            );
          })}
      </div>
      <div ref={loaderRef}>Loading</div>
    </>
  );
};
export default InfiniteScroll;
