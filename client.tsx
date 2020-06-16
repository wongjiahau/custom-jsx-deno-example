import { Spongebob } from "./jsx.ts";

const EntryComponent = () => {
  return (
    <div id="patrick">
      <MySubComponent drugs={["rick", "morty"]} />
    </div>
  );
};

const MySubComponent = (props: { drugs: string[] }) => {
  return (
    <div>
      {props.drugs.map((drug) => <div>{drug}</div>)}
    </div>
  );
};

console.log(JSON.stringify(<EntryComponent />, null, 2));
