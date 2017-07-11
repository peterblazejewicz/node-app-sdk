// Copyright © 2017 The Things Network
// Use of this source code is governed by the MIT license that can be found in the LICENCE file.

/* @flow */
/* eslint-disable */
// Code generated by protoc-gen-flowtypes DO NOT EDIT.
// InputID: 2326cf79581904ad4dce378297a01e5ec868f6c2

export type Trace = {
  id?: string,
  time?: number,
  service_id?: string,
  service_name?: string,
  event?: string,
  metadata?: Array<TraceMetadataEntry>,
  parents?: Array<Trace>
};

export type TraceMetadataEntry = {
  key?: string,
  value?: string
};


