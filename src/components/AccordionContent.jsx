import Accordion from "./Accordion";
const AccordionContent = () => {
  const items = [
    {
      title: "Html",
      content: "This is good Html",
    },
    {
      title: "CSS",
      content: "This is cascading Css",
    },
    {
      title: "JavaScript",
      content: "JavaScript is a scripting language",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
};

export default AccordionContent;
