import { Slide } from "./models/Slide";
import { TitleSlide } from "./TitleSlide";
import { CodeSlide } from "./CodeSlide";
import { ContentSlide } from "./ContentSlide";
import { VideoSlide } from "./VideoSlide";

export const slides: Slide[] = [
  new TitleSlide("Interfaces!", "assets/backgrounds/title.jpg"),
  new CodeSlide(
    `
public interface BasicList<T> {
  void add(T value);
  void set(int index, T value)
  T get(int index);
}
  `,
    "java",
    "A Basic Interface"
  ),
  new ContentSlide(
    "How do we use them?",
    `
* Polymorphism!
    * "Classes of Classes"
    * Contract
    `
  ),
  new CodeSlide(
    `
public class BasicArrayList<T> implements BasicList<T> {
  private Object[] array;
  private int size = 0;

  BasicArrayList() {
    array = new Object[10];
  }

  @Override
  public void add(T value) {
    if (array.length < size) {
      Object[] oldArray = array;
      array = new Object[oldArray.length * 2];
      System.arraycopy(oldArray, 0, array, 0, oldArray.length);
    }
    array[size] = value;
    size++;
  }

  @Override
  public void set(int idx, T value) {
    array[idx] = value;
  }

  @Override
  public T get(int idx) {
    if (idx >= size) {
      throw new NullPointerException();
    }
    return (T) array[idx];
  }
}

  `,
    "java",
    "Implementing BasicList"
  ),
  new CodeSlide(
    `
public class Main {
  public static void main(String[] args) {
    BasicList<Integer> list = new BasicArrayList<>();

    list.add(1);

    System.out.println(list.get(0));
  }
}
  `,
    "java",
    "Using BasicList"
  ),
  new CodeSlide(
    `
public interface Slide {
  String getBackgroundImage();
  String getBackgroundColor();
  String getElementClass();
  String toMarkdown();
}
  `,
    "typescript",
    "This presentation!"
  ),
  new VideoSlide("EggDog", "g0WmiI2QUw0"),
  new ContentSlide(
    "Interfaces vs. Abstract Classes",
    `
* Abstract classes can have implementations.
* Classes can only inherit from one abstract class, but may implement many interfaces.
* Use abstract class if code reuse is the goal.
* Use interface to decouple blueprint from inheritance.
  `
  ),
];
