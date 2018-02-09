import React from "react";

export default class Pager extends React.Component {

    render() {

        const {
            totalRecords,
            itemsPerPage,
            currentPage,
            onPageChange
        } = this.props

        let pageCount = Math.ceil(totalRecords / itemsPerPage)

        return <span>
            <div className="pager">
                {[...Array(pageCount)].map((index, item) => {
                    let pageNumber = item + 1
                    return <span className={`page ${(pageNumber == currentPage) ? 'page-current' : null}`}
                                 onClick={(e) => onPageChange(pageNumber)}>{pageNumber}</span>
                })}
            </div>
        </span>
    }
}