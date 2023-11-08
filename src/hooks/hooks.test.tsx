import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { useOutsideClick } from "./useOutsideClick";

describe("useOutsideClick", () => {
  type Props = {
    onClick: jest.Mock<any, any>;
  };
  const Wrapper = ({ onClick }: Props) => {
    const ref = useOutsideClick(onClick);

    return <div ref={ref}>Inside</div>;
  };

  test("should call onClick when clicking outside", () => {
    const onClick = jest.fn();
    render(<Wrapper onClick={onClick} />);
    fireEvent.mouseDown(document.body);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("should NOT call onClick() when clicking inside", () => {
    const onClick = jest.fn();
    render(<Wrapper onClick={onClick} />);
    fireEvent.mouseDown(screen.getByText("Inside"));

    expect(onClick).not.toHaveBeenCalled();
  });

  test("should NOT call onClick() when Wrapper unmounted", () => {
    const onClick = jest.fn();
    const { unmount } = render(<Wrapper onClick={onClick} />);
    unmount();

    expect(onClick).not.toHaveBeenCalled();
  });
});
