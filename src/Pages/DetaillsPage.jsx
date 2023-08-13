import React from 'react';

import Layout from '../Layout/Layout.jsx';
import { useParams } from 'react-router';
import Loader from '../Component/Loader';
import BlogDetails from '../Component/BlogDetails';

import { postDeatils } from "../APIRequest/APIRequest.js"

const DetaillsPage = () => {

    let { postID } = useParams();
    let [list, SetList] = useState(null);

    useEffect(() => {

        (async () => {

            let res = await postDeatils(postID);
            SetList(res);
        })()
    }, [postID])


    return (
        <div>
            <Layout>
                {list === null ? <Loader /> : <BlogDetails list={list} />}

            </Layout>

        </div>
    );
};

export default DetaillsPage;