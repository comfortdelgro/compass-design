
import {useCallback, useMemo, useRef, useState} from 'react';
import { SliderProps, SliderState } from './types';
import { clamp, snapValueToStep } from './number';
import { useControlledState } from './useControlledState';

const DEFAULT_MIN_VALUE = 0;
const DEFAULT_MAX_VALUE = 100;
const DEFAULT_STEP_VALUE = 1;

export interface SliderStateOptions<T> extends SliderProps<T> {}

export function useSliderState<T extends number | number[]>(props: SliderStateOptions<T>): SliderState {
  const {
    tooltip = true,
    isDisabled = false,
    minValue = DEFAULT_MIN_VALUE,
    maxValue = DEFAULT_MAX_VALUE,
    step = DEFAULT_STEP_VALUE,
    orientation = 'horizontal'
  } = props;

  const pageSize = useMemo(() => {
    let calcPageSize = (maxValue - minValue) / 10;
    calcPageSize = snapValueToStep(calcPageSize, 0, calcPageSize + step, step);
    return Math.max(calcPageSize, step);
  }, [step, maxValue, minValue]);

  const restrictValues = useCallback((values: number[]) => values?.map((val, idx) => {
    const min = idx === 0 ? minValue : val[idx - 1];
    const max = idx === values.length - 1 ? maxValue : val[idx + 1];
    return snapValueToStep(val, min, max, step);
  }), [minValue, maxValue, step]);

  const value = useMemo(() => restrictValues(convertValue(props.value)), [props.value, restrictValues]);
  const defaultValue = useMemo(() => restrictValues(convertValue(props.defaultValue) ?? [minValue]), [restrictValues, props.defaultValue, minValue]);
  const onChange = createOnChange(props.value, props.defaultValue, props.onChange);
  const onChangeEnd = createOnChange(props.value, props.defaultValue, props.onChangeEnd);

  const [values, setValuesState] = useControlledState<number[]>(
    value,
    defaultValue,
    onChange
  );
  const [isDraggings, setDraggingsState] = useState<boolean[]>(new Array(values.length).fill(false));
  const isEditablesRef = useRef<boolean[]>(new Array(values.length).fill(true));
  const [focusedIndex, setFocusedIndex] = useState<number | undefined>(undefined);

  const valuesRef = useRef<number[]>(values);
  const isDraggingsRef = useRef<boolean[]>(isDraggings);
  const setValues = (values: number[]) => {
    valuesRef.current = values;
    setValuesState(values);
  };

  const setDraggings = (draggings: boolean[]) => {
    isDraggingsRef.current = draggings;
    setDraggingsState(draggings);
  };

  function getValuePercent(value: number) {
    return (value - minValue) / (maxValue - minValue);
  }

  function getThumbMinValue(index: number) {
    return index === 0 ? minValue : values[index - 1];
  }
  function getThumbMaxValue(index: number) {
    return index === values.length - 1 ? maxValue : values[index + 1];
  }

  function isThumbEditable(index: number) {
    return isEditablesRef.current[index];
  }

  function setThumbEditable(index: number, editable: boolean) {
    isEditablesRef.current[index] = editable;
  }

  function updateValue(index: number, value: number) {
    if (isDisabled || !isThumbEditable(index)) {
      return;
    }
    const thisMin = getThumbMinValue(index);
    const thisMax = getThumbMaxValue(index);

    value = snapValueToStep(value, thisMin, thisMax, step);
    const newValues = replaceIndex(valuesRef.current, index, value);
    setValues(newValues);
  }

  function updateDragging(index: number, dragging: boolean) {
    if (isDisabled || !isThumbEditable(index)) {
      return;
    }

    const wasDragging = isDraggingsRef.current[index];
    isDraggingsRef.current = replaceIndex(isDraggingsRef.current, index, dragging);
    setDraggings(isDraggingsRef.current);

    if (onChangeEnd && wasDragging && !isDraggingsRef.current.some(Boolean)) {
      onChangeEnd(valuesRef.current);
    }
  }

  function setThumbPercent(index: number, percent: number) {
    updateValue(index, getPercentValue(percent));
  }

  function getRoundedValue(value: number) {
    return Math.round((value - minValue) / step) * step + minValue;
  }

  function getPercentValue(percent: number) {
    const val = percent * (maxValue - minValue) + minValue;
    return clamp(getRoundedValue(val), minValue, maxValue);
  }

  function incrementThumb(index: number, stepSize: number = 1) {
    const s = Math.max(stepSize, step);
    updateValue(index, snapValueToStep(values[index] + s, minValue, maxValue, step));
  }

  function decrementThumb(index: number, stepSize: number = 1) {
    const s = Math.max(stepSize, step);
    updateValue(index, snapValueToStep(values[index] - s, minValue, maxValue, step));
  }

  return {
    values: values,
    getThumbValue: (index: number) => values[index],
    setThumbValue: updateValue,
    setThumbPercent,
    isThumbDragging: (index: number) => isDraggings[index],
    setThumbDragging: updateDragging,
    focusedThumb: focusedIndex,
    setFocusedThumb: setFocusedIndex,
    getThumbPercent: (index: number) => getValuePercent(values[index]),
    getValuePercent,
    getThumbMinValue,
    getThumbMaxValue,
    getPercentValue,
    isThumbEditable,
    setThumbEditable,
    incrementThumb,
    decrementThumb,
    step,
    tooltip,
    pageSize,
    orientation,
    isDisabled
  };
}

function replaceIndex<T>(array: T[], index: number, value: T) {
  if (array[index] === value) {
    return array;
  }

  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}

function convertValue(value: number | number[]) {
  if (value == null) {
    return undefined;
  }

  return Array.isArray(value) ? value : [value];
}

function createOnChange(value, defaultValue, onChange) {
  return (newValue: number[]) => {
    if (typeof value === 'number' || typeof defaultValue === 'number') {
      onChange?.(newValue[0]);
    } else {
      onChange?.(newValue);
    }
  };
}
