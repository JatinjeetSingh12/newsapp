import React, { useState } from 'react'
import { useEffect } from 'react';
import Item from './Item';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [state, setState] = useState({
        page: 1,
        loading: true,
        totalpages: 0
    });

    const [page, setpage] = useState(1)
    const [article, setarticle] = useState([])

    const capitalizeFirstLetter = (str) => {

        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }

    const updateNews = async () => {
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pagesize}&page=${page}`;
        let data = await fetch(url)
        props.setprogress(30);

        let parseddata = await data.json()
        props.setprogress(70);
        setState({
            totalpages: parseddata.totalResults,
            loading: false
        })
        setarticle(parseddata.articles)
        props.setprogress(100);
        props.article.tit
    }

    useEffect(() => {
        updateNews();
    }, [])



    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pagesize}&page=${page + 1}`;

        setpage(page + 1);

        let data = await fetch(url)

        let parseddata = await data.json()

        setState({
            totalpages: parseddata.totalResults
        })
        setarticle(article.concat(parseddata.articles))

    };

    return (
        <>

            <div>
                <h1 className="text-center" style={{ margin: "56px 0px", marginTop: "74px" }}>News-{capitalizeFirstLetter(props.category)}</h1>


                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== state.totalpages}
                    loader={<Spinner mode={props.mode} />}
                >

                    <div className="container my-3">
                        <div className="row">
                            {!state.loading && article.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Item title={element.title} mode={props.mode} search={props.search} source={element.source.name} author={element.author} date={element.publishedAt} description={element.description} imgUrl={element.urlToImage} Url={element.url} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        </>
    )
}
