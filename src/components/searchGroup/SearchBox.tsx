import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useAppStore from "../../app/appState";
import { getSongs } from "../../services";

// import { Container } from './styles';

const SearchBox: React.FC = () => {
  const [isKaraoke, setIsKaraoke] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [rowLayout, setRowLayout] = useState(false);
  const updatesSearchResult = useAppStore((state) => state.updatesSearchResult);

  const submit = () => {
    if (!searchValue) return;
    getSongs(searchValue, isKaraoke).then((res) => {
      updatesSearchResult(res.data);
    });
  };

  return (
    <div className="z-20 flex-none">
      <FormControl className="flex w-full bg-white p-2 gap-3 items-center">
        <Input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
          className="shrink"
          placeholder="Search"
        />
        <FormLabel margin="0" htmlFor="karaoke">
          Karaoke
        </FormLabel>
        <Switch
          id="karaoke"
          onChange={() => setIsKaraoke(!isKaraoke)}
          isChecked={isKaraoke}
        />

        <Button onClick={submit}>Search</Button>
      </FormControl>

      <div className="text-white flex justify-between items-center bg-black px-3 py-2">
        Kết quả
        <div className="items-center gap-2 lg:flex hidden">
          Row
          <Switch
            isChecked={rowLayout}
            onChange={() => setRowLayout(!rowLayout)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
