import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
`;

const Backdrop = styled.div``;

const DetailPresenter = ({ result, loading, error }) => (
  <Container>
    <Backdrop />
  </Container>
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
