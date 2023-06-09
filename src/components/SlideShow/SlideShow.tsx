import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

interface Events {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
}

interface EventContainer {
  count: number;
  results: Events[];
}

interface EventDataWrapper {
  data: EventContainer;
}

interface Image {
  path: string;
}

const SlideShow = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<EventDataWrapper>("/events")
      .then((res) => setEvents(res.data.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      <ul className="list-group">
        {events.map((event) => (
          <li className="list-item-group" key={event.id}>
            {/* <img src={event.thumbnail.path + "/portrait_small.jpg"} alt="" /> */}
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SlideShow;
