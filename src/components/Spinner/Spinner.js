import { css } from "@emotion/react";
import React from 'react';
import GridLoader from "react-spinners/GridLoader";
import './Spinner.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({color, loading, size}) => {
    return (
        <div className="sweet-loading">
            <GridLoader color={color||"#717fe0"} loading={loading} css={override} size={size||30} />
        </div>
    );
};

export default Spinner;