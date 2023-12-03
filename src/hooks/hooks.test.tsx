import "@testing-library/jest-dom";
import {
  render,
  fireEvent,
  screen,
  renderHook,
  cleanup,
} from "@testing-library/react";
import { useOutsideClick } from "./useOutsideClick";
import { useDataLoad } from "./useDataLoad";
import { getDataSlice } from "../api/api-service";
import { mockData } from "../api/api-service.test";

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

/* describe("useDataLoad", () => {
  beforeAll(() => {
    jest.mock("../api/api-service", () => ({
      getDataSlice: (pageNumber: number = 0, limit: number) =>
        mockData.slice(pageNumber, limit),
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("", async () => {
    const getDataSlice = (await import("../api/api-service")).getDataSlice;
    const test1 = getDataSlice(0, 3);
    console.log(test1);

    const { result } = renderHook(() => useDataLoad(0, 10));
    // console.log("result", result);

    // expect(getDataSlice).toHaveBeenCalledTimes(1);
    expect(result.current).toBeUndefined();
  });
}); */
