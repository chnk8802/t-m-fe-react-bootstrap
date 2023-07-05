import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function ProfilePicture({imageDimension}) {
  return (
    <Container className="p-0">
          <Image src="https://assets1.ignimgs.com/2020/01/23/forge-1579809968738.jpg" roundedCircle style={imageDimension} />
    </Container>
  );
}

export default ProfilePicture;