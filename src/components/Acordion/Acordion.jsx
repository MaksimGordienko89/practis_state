import React from 'react';
import './Acordion.css';

export class Acordion extends React.Component {
  state = { isShow: true };
  handleClick = () => {
    this.setState(prevState => {
      return { isShow: !prevState.isShow };
    });
  };
  render() {
    const { isShow } = this.state;
    const { handleClick } = this;
    return (
      <div className="container">
        <div className="accordion">
          <div className="accordion-item" onClick={handleClick}>
            <p className="title">First Question</p>
            <div className="content">
              {isShow && (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
