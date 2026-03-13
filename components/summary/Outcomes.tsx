type OutcomeProps = {
  children: React.ReactNode
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Outcome = ({ children, Icon }: OutcomeProps) => {
  return (
    <li className="grid grid-cols-7 items-center my-4">
      <div className="col-span-1 flex justify-center items-center">
        <Icon className="h-6 w-6 text-primary/60" />
      </div>
      <span className="col-span-5 lg:col-span-6">{children}</span>
    </li>
  );
};

type OutcomesProps = {
  title: string;
  learning_outcomes: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Outcomes = ({ title, learning_outcomes, Icon }: OutcomesProps) => {
  return (
    <div className="w-full lg:w-1/2 text-primary mt-6">
      <h2 className="text-xl mb-4">{title}</h2>
      <div className="h-2 bg-secondary/45 rounded-md -mt-2 w-full" />
      <ul>
        {learning_outcomes.map((outcome, index) => (
          <Outcome key={index} Icon={Icon}>
            {outcome}
          </Outcome>
        ))}
      </ul>
    </div>
  );
};

export default Outcomes;
