import { React } from "react";
import { Card } from "antd";

const EventCard = () => {
  return (
    <Card
      hoverable
      style={{
        margin: "1.2rem",
        width: 277.3,
        height: 300,
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
        description={<a href="/home">Donate now</a>}
      />
    </Card>
  );
};

export default EventCard;
