import { AccordionItem } from "@/components/FAQSection/components/AccordionItem";

const faqData = [
  {
    title: "Description",
    text: "<p>Liquid collagen that visibly transforms your skin & hair, supports your gut health and supports your healthy weight goals in just 6 weeks.<br /><br /></p><ul><li>Just 1-2 tablespoons a day</li><li>Supercharged with Vitamin C and Hyaluronic Acid</li><li>Obsessively tested and backed by data</li><li>Supports noticeably smoother and plumper skin, promotes stronger and fuller healthy hair, and supports joint health</li></ul>",
  },
  {
    title: "How to use",
    text: "<p>Liquid collagen that visibly transforms your skin & hair, supports your gut health and supports your healthy weight goals in just 6 weeks.<br /><br /></p><ul><li>Just 1-2 tablespoons a day</li><li>Supercharged with Vitamin C and Hyaluronic Acid</li><li>Obsessively tested and backed by data</li><li>Supports noticeably smoother and plumper skin, promotes stronger and fuller healthy hair, and supports joint health</li></ul>",
  },
  {
    title: "Ingredients",
    text: "<p>Liquid collagen that visibly transforms your skin & hair, supports your gut health and supports your healthy weight goals in just 6 weeks.<br /><br /></p><ul><li>Just 1-2 tablespoons a day</li><li>Supercharged with Vitamin C and Hyaluronic Acid</li><li>Obsessively tested and backed by data</li><li>Supports noticeably smoother and plumper skin, promotes stronger and fuller healthy hair, and supports joint health</li></ul>",
  },
];

const FAQ = () => (
  <div>
    {faqData.map(({ title, text }) => (
      <AccordionItem key={title} title={title} text={text} isBlack />
    ))}
  </div>
);

export { FAQ };
