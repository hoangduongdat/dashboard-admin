import React, { useState } from 'react';

import'./table.css'


const Table = (props) => {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0,Number(props.limit)) : props.bodyData
    const [dataShow,setDataShow] = useState(initDataShow)

    let pages= 1
    let range =[]
    if(props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length/Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range=[...Array(pages).keys()] 
    }

    const [currPage,setCurrPage] =useState(1)

    const selectPage = page => {
        if(page && page !== currPage){
            const start = Number(props.limit) * (page-1)
            const end = start + Number(props.limit)
            setDataShow(props.bodyData.slice(start, end))
            setCurrPage(page)
        }  
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                   {
                       props.headData && props.renderHead ? (
                        <thead>
                            <tr>
                                {
                                    props.headData.map((item,i)=> props.renderHead(item,i))
                                }
                            </tr>
                        </thead>
                       ) : null
                   }
                   {
                       props.bodyData && props.renderBody ? (
                        <tbody>
                           {
                                dataShow.map((item,i)=> props.renderBody(item,i))
                            }
                        </tbody>
                       ) : null
                   }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item,i) => (
                                <div 
                                    key={i} 
                                    className={`table__pagination-item ${currPage===i+1 ? 'active' : ''}`}
                                    onClick={() => selectPage(i+1)}
                                >
                                    {item+1}
                                </div>
                            ))
                        }
                    </div>
                ): null
            }
        </div>
    );
};

export default Table;