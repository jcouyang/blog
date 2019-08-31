module Data.Todo where

type Todo = {
  userId:: Int,
  id:: Int,
  title:: String,
  completed:: Boolean
}

type Todos = Array Todo
