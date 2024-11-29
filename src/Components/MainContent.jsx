import React, { Component } from 'react'
import {
  Button,
  Dropdown,
  DropdownButton,
  Carousel,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class MyComponent extends Component {
  state = {
    trendingFilms: [],
    watchItAgainFilms: [],
    newReleasesFilms: [],
  }
  getTrendingFilms = () => {
    fetch('http://www.omdbapi.com/?apikey=215b3828&s=Dragon-Ball')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata API')
        }
      })
      .then((data) => {
        this.setState({ trendingFilms: data.Search || [] })
      })
      .catch((error) => {
        console.error('Errore:', error)
      })
  }

  // Funzione per recuperare i "Watch It Again"
  getWatchItAgainFilms = () => {
    fetch('http://www.omdbapi.com/?apikey=215b3828&s=Naruto')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata API')
        }
      })
      .then((data) => {
        this.setState({ watchItAgainFilms: data.Search || [] })
      })
      .catch((error) => {
        console.error('Errore:', error)
      })
  }

  // Funzione per recuperare i "New Releases"
  getNewReleasesFilms = () => {
    fetch('http://www.omdbapi.com/?apikey=215b3828&s=One-Piece')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata API')
        }
      })
      .then((data) => {
        this.setState({ newReleasesFilms: data.Search || [] })
      })
      .catch((error) => {
        console.error('Errore:', error)
      })
  }

  componentDidMount() {
    this.getTrendingFilms()
    this.getWatchItAgainFilms()
    this.getNewReleasesFilms()
  }
  chunkFilms = (films, size) => {
    const result = []
    for (let i = 0; i < films.length; i += size) {
      result.push(films.slice(i, i + size))
    }
    return result
  }
render() {
    const { trendingFilms, watchItAgainFilms, newReleasesFilms } = this.state

    // Raggruppiamo i film in gruppi di 3 per ciascuna categoria
    const groupedTrendingFilms = this.chunkFilms(trendingFilms, 4)
    const groupedWatchItAgainFilms = this.chunkFilms(watchItAgainFilms, 4)
    const groupedNewReleasesFilms = this.chunkFilms(newReleasesFilms, 4)

return (
      <main>
        <Container className="p-5 d-flex align-items-center">
          <h1 className="text-light">TV Shows</h1>
          <DropdownButton
            id="dropdown-basic-button"
            title="Generi"
            variant="secondary"
            className="ms-5 bg-transparent pe-4"
          >
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Anime</Dropdown.Item>
          </DropdownButton>
        </Container>

        {/* Carosello Desktop */}
        <Container className="text-light px-5">
          <h2 className="d-none d-md-block">Trending Now</h2>
          <Carousel
            id="netflixCarousel"
            className="mt-5 d-none d-md-block"
            indicators={false}
            controls={true}
          >
            {groupedTrendingFilms.length > 0 &&
              groupedTrendingFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex">
                    {group.map((film, i) => (
                      <img
                        key={i}
                        src={film.Poster}
                        className="d-block w-25 mx-2 img-fluid"
                        alt={film.Title}
                        class="AlbumImg"
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
          </Carousel> 
<h2 className="d-none d-md-block">Watch It Again</h2>
          <Carousel
            id="netflixCarousel2"
            className="mt-5 d-none d-md-block"
            indicators={false}
            controls={true}
          >
            {groupedWatchItAgainFilms.length > 0 &&
              groupedWatchItAgainFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex">
                    {group.map((film, i) => (
                      <img
                        key={i}
                        src={film.Poster}
                        className="d-block w-25 mx-2 img-fluid"
                        alt={film.Title}
                        class="AlbumImg"
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>

          <h2 className="d-none d-md-block">New Releases</h2>
          <Carousel
            id="netflixCarousel3"
            className="mt-5 d-none d-md-block"
            indicators={false}
            controls={true}
          >
            {groupedNewReleasesFilms.length > 0 &&
              groupedNewReleasesFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex">
                    {group.map((film, i) => (
                      <img
                        key={i}
                        src={film.Poster}
                        className="d-block w-25 mx-2 img-fluid"
                        alt={film.Title}
                        class="AlbumImg"
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </Container>
{/* Caroselli per Mobile */}
        <Container className="text-light mt-5">
          <h2 className="d-md-none">Trending Now</h2>
          <Carousel
            id="imageCarousel"
            className="mt-5 d-md-none"
            indicators={false}
            controls={true}
          >
            {groupedTrendingFilms.length > 0 &&
              groupedTrendingFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <Row className="g-2">
                    {group.map((film, i) => (
                      <Col key={i} xs={4}>
                        <img
                          src={film.Poster}
                          className="d-block w-100"
                          alt={film.Title}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
<h2 className="d-md-none">Watch It Again</h2>
          <Carousel
            id="imageCarousel2"
            className="mt-5 d-md-none"
            indicators={false}
            controls={true}
          >
            {groupedWatchItAgainFilms.length > 0 &&
              groupedWatchItAgainFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <Row className="g-2">
                    {group.map((film, i) => (
                      <Col key={i} xs={4}>
                        <img
                          src={film.Poster}
                          className="d-block w-100"
                          alt={film.Title}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
<h2 className="d-md-none">New Releases</h2>
          <Carousel
            id="imageCarousel3"
            className="mt-5 d-md-none"
            indicators={false}
            controls={true}
          >
            {groupedNewReleasesFilms.length > 0 &&
              groupedNewReleasesFilms.map((group, index) => (
                <Carousel.Item key={index}>
                  <Row className="g-2">
                    {group.map((film, i) => (
                      <Col key={i} xs={4}>
                        <img
                          src={film.Poster}
                          className="d-block w-100"
                          alt={film.Title}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
          </Carousel>
        </Container>
        {/* Bottone per visualizzare più contenuti */}
        <Container className="d-flex justify-content-center mt-5">
          <Button className="text-light bg-transparent border border-white">
            Show More
          </Button>
        </Container>
        </main>
)}
}

export default MyComponent
