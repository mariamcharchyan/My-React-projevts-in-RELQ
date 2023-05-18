import Text from "./Text";
import Button from "./Button";
import Input from "./Input";

function NewComp() {
  return (
    <>
      <Text />
      <div className="box">
        <Input />
        <Button />
      </div>
    </>
  );
}
export default NewComp;
