'use server'

const METADATA_BASE = process.env.METADATA_BASE

export async function getSettings() {
  return {
    METADATA_BASE
  }
}