/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import React from 'react'

export const useLayoutEffect =
  typeof window !== 'undefined'
    ? React.useLayoutEffect
    : () => {
        //
      }
