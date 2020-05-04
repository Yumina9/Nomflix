import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"), //movie일 경우 True
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id); //api주소를 숫자로만 받기 위해서
    if (isNaN(parsedId)) {
      // id가 숫자가 아닌 다른걸로 입력 받으면 /로 넣어줌
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId)); // 전체를 묶은 ()가 'const =' 와 동일
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    console.log(this.state);
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}
