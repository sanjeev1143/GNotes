import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Db } from './firebase_cofig';
import Note from './Note';
import ReactPaginate from 'react-paginate';


function View_Note() {
    const [read, setRead] = useState([]);
    const [load, setLoad] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 6;
    const pageVisited = pageNumber * usersPerPage;

    const displayUsers = read.slice(pageVisited, pageVisited + usersPerPage).map((reads) => <Note title={reads.title} content={reads.content} id={reads.id} />);

    const notesRef = collection(Db, "Notes");
    useEffect(() => {
        const getNotes = async () => {
            try {
                setLoad(false);
                const data = await getDocs(notesRef);
                setRead(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            } catch (e) {
                setLoad(true);
            }
        };
        getNotes();
    }, [read], [load])
    const pagesCount = Math.ceil(read.length / usersPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <div>

            {/* {read.map((reads) => <Note title={reads.title} content={reads.content} id={reads.id} />)
            } */}

            {load ? <div><div class="alert alert-warning alert-dismissible fade show" style={{ textAlign: "center" }} role="alert">
                <strong>TimeOut </strong>Please try after sometime
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
                <div class="spinner-border" style={{ width: "3rem", height: "3rem", position: "absolute", top: "50vh", left: "50vw" }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div> : <div>{displayUsers}
                {
                    read.length > 6 ? <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pagesCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttns"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    /> : null}</div>}
        </div>
    )
}

export default View_Note
