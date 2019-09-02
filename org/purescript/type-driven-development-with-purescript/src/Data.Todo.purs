module Data.Todo where

type Path = String

type Todo = {
  userId:: Int,
  id:: Int,
  title:: String,
  completed:: Boolean
}

type Todos = Array Todo

type State = {
             todos:: Todos
             }
