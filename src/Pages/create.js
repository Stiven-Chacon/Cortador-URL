import { useCallback, useEffect, useReducer, useState } from "react";
import CreateForm from "../Components/createForm";
import Item from "../Components/item";
import ItemsContainer from "../Components/itemsContainer";
import MainContainer from "../Components/mainContainer";

import useReducerApp from "../store/store";

export default function Create() {
  const [state, dispatch] = useReducerApp();
  const [url, setUrl] = useState("");

  console.log("state", state);
  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />
      <ItemsContainer>
        {state?.items.map((item) => (
          <Item key={crypto.randomUUID()} item={item} />
        ))}
      </ItemsContainer>
    </MainContainer>
  );
}