import React, { Fragment } from 'react';
import styled from 'styled-components';

export const ViewURLSComponent = () => {
  const urls = JSON.parse(localStorage.getItem('urls')) || [];
  if (urls && urls.length) {

    return (
        <Fragment>
            <h3>All Stored URLs</h3>
            <FullWidthTable>
                <thead>
                 <tr>
                     <HalfWidthTH>Long URL</HalfWidthTH>
                     <HalfWidthTH>Short URL</HalfWidthTH>
                 </tr>
                </thead>
                <tbody>
                {urls.map(u => {
                    return (
                    <tr key={u.shortURL}>
                        <HalfWidthTD><a href={u.longURL}>{u.longURL}</a></HalfWidthTD>
                        <HalfWidthTD><a href={u.shortURL}>{u.shortURL}</a></HalfWidthTD>
                    </tr>
                    )
                })}
                </tbody>
            </FullWidthTable>
        </Fragment>
    )

  }
  return <p>There are no current stored urls <a href="/">add one</a></p>
};

export default ViewURLSComponent;

const FullWidthTable = styled.table`
    width: 100%;
`;
const HalfWidthTD = styled.td`
    width: 50%;
    padding-bottom: 20px;
`;
const HalfWidthTH = styled.th`
    width: 50%;
`;