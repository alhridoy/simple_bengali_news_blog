import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router';
import BlogList from '../Component/BlogList.jsx'
import Loader from '../Component/Loader.jsx'
import { postByCategory } from '../APIRequest/APIRequest';



const ByCategoryPage = () => {

    let { categoryID } = useParams();
    let [list, SetList] = useState(null);

    useEffect(() => {

        (async () => {

            let res = await postByCategory(categoryID);
            SetList(res);
        })()
    }, [categoryID])


    return (

        <Layout>
            {list === null ? <Loader /> : <BlogList list={list} />}
        </Layout>

    );
};

export default ByCategoryPage;