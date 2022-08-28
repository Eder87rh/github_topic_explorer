import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_TOPIC_BY_NAME } from "../../graphql/queries/topic";
import { Typography, Chip, Container } from "@mui/material";

const Topics = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_TOPIC_BY_NAME, id);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error... ${error.message}</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
        {id.toUpperCase()}
      </Typography>

      <Typography sx={{ mt: 5 }} variant="h5" gutterBottom>
        Related Topics
      </Typography>
      {data.topic.relatedTopics.map((topic) => (
        <Chip
          sx={{ mr: 1 }}
          key={topic.id}
          label={topic.name}
          variant="outlined"
          onClick={() => {}}
        />
      ))}

      <Typography sx={{ mt: 4 }} variant="h5" gutterBottom>
        Starsgazers
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {data.topic.stargazers.totalCount}
      </Typography>

      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    </Container>
  );
};

export default Topics;
