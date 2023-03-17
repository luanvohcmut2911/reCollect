import { React } from "react";
import { Card, Button } from "antd";
import Typography from "antd/es/typography/Typography";

const EventCard = () => {
  return (
    <Card
      hoverable
      style={{
        margin: "1.2rem",
        width: 277.3,
        height: "auto",
      }}
      cover={
        <img
          alt="event"
          style={{
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
            width: 277.3,
            height: 200,
          }}
          src="https://picsum.photos/501"
        />
      }
    >
      <Card.Meta
        title="Old books donation on Nguyen Van Binh Street, HCMC"
        description={
          <div>
            <Typography.Text type="secondary"> Updated in March 13 </Typography.Text>
            <br />
            <Typography.Text style={{
              padding: "5px",
              paddingBottom: "10px"
            }}> Voluptate excepteur laboris occaecat sunt pariatur culpa aliquip ut ipsum laboris aliqua veniam.y. </Typography.Text>
            <br />
            <br />
            <Button href="/donate-info" style={{
              color: "#EF8450",
              fontStyle: "bold"
            }}>Donate now </Button>
          </div>

        }
      />
    </Card>
  );
};

export default EventCard;
