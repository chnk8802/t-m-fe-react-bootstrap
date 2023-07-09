import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function ProfilePicture({ imageDimension, imageSource, thumbnail }) {
  return (
    <Container className="p-0">
      <Image src={imageSource} roundedCircle style={imageDimension} thumbnail={thumbnail ? true : false} />
    </Container>
  );
}

export default ProfilePicture;