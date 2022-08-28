import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_TOPIC_BY_NAME } from "../../graphql/queries/topic";

const Topics = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_TOPIC_BY_NAME, id);
  console.log("🚀 ~ file: [id].jsx ~ line 10 ~ Topics ~ data", data);

  loading && <p>Loading</p>;

  return (
    <div>
      <h1>Topic : {id}</h1>

      {JSON.stringify(data)}
    </div>
  );
};

export default Topics;
