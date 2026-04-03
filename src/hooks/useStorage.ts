import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface UseStorageOptions<S> {
  parentState?: S;
  onParentStateChange?: (value: S) => void;
}

/**
 * useStorage - A fallback state hook
 *
 * Acts as a controlled/uncontrolled component pattern:
 * - If parentState is provided, uses that instead of local state
 * - If onParentStateChange is provided, calls that instead of local setState
 * - Falls back to internal state when parent props are not provided
 *
 * @example
 * // Uncontrolled (manages its own state)
 * const [value, setValue] = useStorage({}, 'default');
 *
 * @example
 * // Controlled (parent manages state)
 * const [value, setValue] = useStorage({
 *   parentState: props.value,
 *   onParentStateChange: props.onChange,
 * }, 'default');
 *
 * @example
 * // Partially controlled (parent provides value, local handles changes)
 * const [value, setValue] = useStorage({
 *   parentState: props.value,
 * }, 'default');
 */
export function useStorage<S>(
  options: UseStorageOptions<S>,
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];

export function useStorage<S = undefined>(options: {
  parentState?: S;
  onParentStateChange?: (value: S | undefined) => void;
}): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

export function useStorage<S>(
  options: {
    parentState?: S;
    onParentStateChange?: (value: S | undefined) => void;
  },
  initialState?: S | (() => S)
) {
  const { parentState, onParentStateChange } = options;

  const [localState, setLocalState] = useState<S | undefined>(() => {
    if (parentState !== undefined) {
      return parentState;
    }
    return typeof initialState === 'function' ? (initialState as () => S)() : initialState;
  });

  const currentValue = parentState !== undefined ? parentState : localState;

  const setValue: Dispatch<SetStateAction<S | undefined>> = useCallback(
    (value) => {
      const newValue =
        typeof value === 'function'
          ? (value as (prev: S | undefined) => S | undefined)(currentValue)
          : value;

      if (onParentStateChange) {
        onParentStateChange(newValue);
      } else {
        setLocalState(newValue);
      }
    },
    [currentValue, onParentStateChange]
  );

  return [currentValue, setValue];
}
