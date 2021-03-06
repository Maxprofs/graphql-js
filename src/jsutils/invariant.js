/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

export default function invariant(condition: mixed, message: string) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}
